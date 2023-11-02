const express = require('express');
const fs = require('fs').promises;
const app = express();
app.use(express.json());
app.use(express.static('public'));

const servicesFilePath = 'https://in211.scanurag.com/realResources.json';
async function readServices(){
    try{
        const data = await fs.readFile(servicesFilePath, 'utf-8');
        return JSON.parse(data);
    } catch(error){
        console.error('Error reading services:', error);
        return [];
    }
}

async function writeServices(services){
    try{
        await fs.writeFile(servicesFilePath, JSON.stringify(services, null, 2), 'utf-8');
    } catch (error){
        console.error('Error writing services:', error);
    }
}

const PORT = 3033;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.get('/services', async (req, res) =>{
    const services = await readServices();
    res.json(services);
});
// app.post('/books', async (req, res) => {
//     const { title, author } = req.body;
//     const books = await readBooks();
//     const newID = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
//     const newBook = { id: newID, title, author };
//     books.push(newBook);
//     await writeBooks(books);
//     res.status(201).json(newBook);
// });
// app.put('/books/:id', async (req, res) => {
//     const { title, author } = req.body;
//     const { id } = req.params;
//     const books = await readBooks();
//     const book = books.find(book => book.id === parseInt(id, 10));
//     if (!book) {
//         return res.status(404).json({error: 'Book not found' });
//     }
//     book.title = title || book.title;
//     book.author = author || book.author;

//     await writeBooks(books);
//     res.json(book);
// });
// app.delete('/books/:id', async (req, res) => {
//     const { id } = req.params;
//     const books = await readBooks();
//     const initialLength = books.length;
//     const remainingBooks = books.filter(book => book.id !== parseInt(id, 10));

//     if(remainingBooks.length === initialLength){
//         return res.status(404).json({error: 'Book not found'});
        
//     }
//     await writeBooks(remainingBooks);
//     res.json({message: 'Book successfully deleted'})
// });