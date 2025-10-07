const express = require('express');
const app = express();
let blogList = require("./data.json");

app.get('/api/data', (req, res) => 
{
    res.json (blogList)
});

app.get("/api/data/:blogID", (req, res) => 
{
  const id = Number(req.params.blogID);
  const blogItems = blogList.find((blogItems) => blogItems.blogID === id);
  res.json(blogItems);
})

app.use(express.json());

app.post("/api/data", (req, res) => 
{
   newBlog = 
  {
    blogID: blogList.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  blogList.push(newBlog);
  res.status(201).json(newBlog);


const fs = require('fs');
fs.writeFile('data.json', JSON.stringify(blogList), function (err) 
{
    if (err) {
        console.error(err)
        return
    }
});
console.log('Blog list updated');
});

app.put("/api/data/:blogID", (req, res) => {
  const id = Number(req.params.blogID);
  const index = blogList.findIndex((blog) => blog.blogID === id);
  if (index === -1) {
    return res.status(404).send("Blog not found");
  }
  const updatedBlog = 
  {
    blogID: blogList[index].blogID,
    title: req.body.title,
    content: req.body.content,
  };
  blogList[index] = updatedBlog;
  

const fs = require('fs');
fs.writeFile('data.json', JSON.stringify(blogList), function (err) 
{
    if (err) 
    {
        console.error(err)
        return
    }
});
res.status(200).json("Blog updated");
console.log('Blog saved');
});

app.delete("/api/data/:blogID", (req, res) => 
  {
    const id = Number(req.params.blogID);
    const index = blogList.findIndex((blog) => blog.blogID === id);
    if (index === -1) 
    {
      return res.status(404).send("Blog not found");
    }
    blogList.splice(index, 1);
    res.status(200).json("Blog deleted");

const fs = require('fs');
fs.writeFile('data.json', JSON.stringify(blogList), function (err) 
{
    if (err) 
    {
        console.error(err)
        return
    }
});
console.log('Blog saved');

  });



app.listen(3001, () => 
{
    console.log('server is listening on port 3001');
});