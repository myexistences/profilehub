# 🌐 ProfileHub

> **Your digital calling card – elegant, animated, and 100% yours.**

[Live Preview »](https://profilehub-la2b.vercel.app/)   
[![GitHub Stars](https://img.shields.io/github/stars/myexistences/profilehub?style=flat-square)](https://github.com/myexistences/profilehub/stargazers)  [![GitHub Forks](https://img.shields.io/github/forks/myexistences/profilehub?style=flat-square)](https://github.com/myexistences/profilehub/fork)

## 📋 About

ProfileHub is a personal backup and showcase platform that serves as your digital identity hub. It's designed to be your central location for sharing your online presence, content, and professional information. This project is maintained by [myexistences](https://github.com/myexistences) as a personal backup and template for creating beautiful profile pages.

## 🏗️ Project Structure

```
profilehub/
├── client/                 # Frontend application
│   ├── public/            # Static assets
│   │   ├── images/       # Image assets
│   │   └── videos/       # Video backgrounds
│   ├── src/              # Source code
│   │   ├── components/   # React components
│   │   ├── styles/       # CSS/SCSS files
│   │   └── utils/        # Utility functions
│   └── package.json      # Frontend dependencies
│
├── server/                # Backend application
│   ├── src/              # Server source code
│   ├── config/           # Configuration files
│   └── package.json      # Backend dependencies
│
├── LICENSE               # MIT License
└── README.md            # Project documentation
```

## ✨ Key Features

### Personal Branding
- 🎨 Customizable themes and layouts
- 🖼️ Professional avatar and banner support
- 📝 Dynamic bio and status updates
- 🌈 Color scheme customization

### Content Management
- 📁 File hosting and sharing
- 🔗 Social media link aggregation
- 📊 Analytics and view tracking
- 📱 Mobile-responsive design

### Technical Features
- ⚡ Fast and optimized performance
- 🔒 Secure data handling
- 🚀 Easy deployment
- 📦 Modern tech stack

## 🚀 Quick Start

1. **Clone the Repository**
```bash
git clone https://github.com/myexistences/profilehub.git
cd profilehub
```

2. **Install Dependencies**
```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. **Configure Environment**
```bash
# In server directory
cp .env.example .env
# Edit .env with your configuration
```

4. **Start Development Servers**
```bash
# Start backend server
cd server
npm run dev

# Start frontend server (in a new terminal)
cd client
npm run dev
```

## 🎨 Customization Guide

### Basic Setup
1. Update `client/src/config/profile.js`:
   - Personal information
   - Social media links
   - Theme preferences
   - Content sections

2. Add your assets:
   - Place images in `client/public/images/`
   - Add videos to `client/public/videos/`

### Advanced Customization
- Modify components in `client/src/components/`
- Edit styles in `client/src/styles/`
- Add new features in `client/src/utils/`

## 📦 Deployment

### Frontend Deployment
```bash
cd client
npm run build
# Deploy the build folder to your hosting service
```

### Backend Deployment
```bash
cd server
npm run build
# Deploy to your server
```

## 🔧 Environment Variables

Create a `.env` file in the server directory:

```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## 🤝 Contributing

While this is primarily a personal backup, contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support:
- Open an issue on GitHub
- Contact [myexistences](https://github.com/myexistences)

---

Made with ❤️ by [myexistences](https://github.com/myexistences)

[Back to top](#-profilehub) 
