const express=require('express');
const app=express()
const PORT=3000

app.use(express.json())

let books=[
    {id:1,title:"The Advantures of Tom Sawyer",author:"Mark Twain"},
    {id:2,title:"War and Peace",author:"Leo Tolstoy"}
];

app.get('/books',(req,res)=>{
    res.json(books);
});

app.post('/books',(req,res)=>{
    const newBook={
        id:books.length+1,
        title:req.body.title,
        author:req.body.author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.put('/books/:id',(req,res)=>{
    const bookId=parseInt(req.params.id);
    const index=books.findIndex(b=>b.id===bookId);
    if(index==-1){
        return res.status(404).json({message:"Book not found"});
    }
    books[index]={
        id:bookId,
        title:req.body.title || books[index].title,
        author:req.body.author || books[index].author
    };
    res.json(books[index]);
});

app.delete('/books/:id',(req,res)=>{
    const bookId=parseInt(req.params.id);
    books=books.filter(b=>b.id!==bookId);
    res.status(204).send();
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})