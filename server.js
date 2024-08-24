// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const path = require('path');
// const cors = require('cors');
// const fs = require('fs');
// const { v4: uuidv4 } = require('uuid');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://onlineebook35:Demon%40123@cluster0.rogwn5t.mongodb.net/imageUpload?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Define schema and model
// const imageSchema = new mongoose.Schema({
//   filename: String,
//   url: String,
//   folder: String
// });
// const Image = mongoose.model('Image', imageSchema);

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const folderName = req.body.folderName;
//     const folderPath = path.join(__dirname, 'uploads', folderName);

//     // Create folder if it doesn't exist
//     if (!fs.existsSync(folderPath)) {
//       fs.mkdirSync(folderPath, { recursive: true });
//     }

//     cb(null, folderPath);
//   },
//   filename: (req, file, cb) => {
//     // Generate a unique filename with UUID and keep the original extension
//     const uniqueName = uuidv4() + path.extname(file.originalname);
//     cb(null, uniqueName);
//   }
// });

// const upload = multer({ storage });

// // Upload image endpoint
// app.post('/upload', upload.array('images'), async (req, res) => {
//   try {
//     const files = req.files;
//     const folderName = req.body.folderName;
//     const imageUrls = files.map(file => {
//       const imageUrl = `https://image-uploader-8o8h.onrender.com/uploads/${folderName}/${file.filename}`;
//       const image = new Image({
//         filename: file.filename,
//         url: imageUrl,
//         folder: folderName
//       });
//       image.save();  // Save each image in the database
//       return imageUrl;
//     });

//     res.status(200).json({ urls: imageUrls });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Serve static files
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Existing imports and configurations...

// // New endpoint to fetch all folders and their images
// app.get('/folders', async (req, res) => {
//   try {
//     const images = await Image.find();
//     const folders = images.reduce((acc, image) => {
//       if (!acc[image.folder]) {
//         acc[image.folder] = [];
//       }
//       acc[image.folder].push(image.url);
//       return acc;
//     }, {});

//     res.status(200).json(folders);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Serve static files
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// // Endpoint to fetch images in a specific folder
// app.get('/folders/:folderName', async (req, res) => {
//   const folderName = req.params.folderName;

//   try {
//     const images = await Image.find({ folder: folderName });
//     const imageUrls = images.map(img => img.url);

//     res.status(200).json(imageUrls);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// // Existing app.listen and other code...


// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });


// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const path = require('path');
// const cors = require('cors');
// const fs = require('fs');
// const { v4: uuidv4 } = require('uuid');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://onlineebook35:Demon%40123@cluster0.rogwn5t.mongodb.net/imageUpload?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Define schema and model
// const imageSchema = new mongoose.Schema({
//   filename: String,
//   url: String,
//   folder: String
// });
// const Image = mongoose.model('Image', imageSchema);

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const folderName = req.body.folderName;
//     const folderPath = path.join(__dirname, 'uploads', folderName);

//     // Create folder if it doesn't exist
//     if (!fs.existsSync(folderPath)) {
//       fs.mkdirSync(folderPath, { recursive: true });
//     }

//     cb(null, folderPath);
//   },
//   filename: (req, file, cb) => {
//     // Generate a unique filename with UUID and keep the original extension
//     const uniqueName = uuidv4() + path.extname(file.originalname);
//     cb(null, uniqueName);
//   }
// });

// const upload = multer({ storage });

// // Upload image endpoint
// app.post('/upload', upload.array('images'), async (req, res) => {
//   try {
//     const files = req.files;
//     const folderName = req.body.folderName;
//     const imageUrls = files.map(file => {
//       const imageUrl = `http://localhost:5000/uploads/${folderName}/${file.filename}`;
//       const image = new Image({
//         filename: file.filename,
//         url: imageUrl,
//         folder: folderName
//       });
//       image.save();  // Save each image in the database
//       return imageUrl;
//     });

//     res.status(200).json({ urls: imageUrls });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Serve static files
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Existing imports and configurations...

// // New endpoint to fetch all folders and their images
// app.get('/folders', async (req, res) => {
//   try {
//     const images = await Image.find();
//     const folders = images.reduce((acc, image) => {
//       if (!acc[image.folder]) {
//         acc[image.folder] = [];
//       }
//       acc[image.folder].push(image.url);
//       return acc;
//     }, {});

//     res.status(200).json(folders);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Serve static files
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// // Endpoint to fetch images in a specific folder
// app.get('/folders/:folderName', async (req, res) => {
//   const folderName = req.params.folderName;

//   try {
//     const images = await Image.find({ folder: folderName });
//     const imageUrls = images.map(img => img.url);

//     res.status(200).json(imageUrls);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// // Existing app.listen and other code...


// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });


const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://onlineebook35:Demon%40123@cluster0.rogwn5t.mongodb.net/imageUpload?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define schema and model
const imageSchema = new mongoose.Schema({
  filename: String,
  url: String,
  folder: String
});
const Image = mongoose.model('Image', imageSchema);

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folderName = req.body.folderName;
    const folderPath = path.join(__dirname, 'uploads', folderName);

    // Create folder if it doesn't exist
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    cb(null, folderPath);
  },
  filename: (req, file, cb) => {
    // Generate a unique filename with UUID and keep the original extension
    const uniqueName = uuidv4() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// Upload image endpoint
app.post('/upload', upload.array('images'), async (req, res) => {
  try {
    const files = req.files;
    const folderName = req.body.folderName;
    const imageUrls = [];

    for (const file of files) {
      const imageUrl = `https://image-uploader-8o8h.onrender.com/uploads/${folderName}/${file.filename}`;
      const image = new Image({
        filename: file.filename,
        url: imageUrl,
        folder: folderName
      });

      await image.save();  // Save each image in the database
      imageUrls.push(imageUrl);
    }

    res.status(200).json({ urls: imageUrls });
  } catch (error) {
    console.error("Error during image upload:", error);
    res.status(500).json({ error: error.message });
  }
});

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Fetch all folders and their images
app.get('/folders', async (req, res) => {
  try {
    const images = await Image.find();
    const folders = images.reduce((acc, image) => {
      if (!acc[image.folder]) {
        acc[image.folder] = [];
      }
      acc[image.folder].push(image.url);
      return acc;
    }, {});

    res.status(200).json(folders);
  } catch (error) {
    console.error("Error fetching folders:", error);
    res.status(500).json({ error: error.message });
  }
});

// Fetch images in a specific folder
app.get('/folders/:folderName', async (req, res) => {
  const folderName = req.params.folderName;

  try {
    const images = await Image.find({ folder: folderName });
    const imageUrls = images.map(img => img.url);

    res.status(200).json(imageUrls);
  } catch (error) {
    console.error(`Error fetching images in folder ${folderName}:`, error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
