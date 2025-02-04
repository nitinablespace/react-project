# Modern React Dashboard Application

A sophisticated React dashboard application featuring user authentication, interactive components, and a modern UI design.

## 🚀 Features

### Authentication System

- Secure sign-in and sign-up functionality
- Protected routes for authenticated users
- Persistent authentication state using localStorage
- Google authentication support

### Dashboard Components

- **Interactive Counter**

  - Animated counter with increment/decrement functionality
  - Visual feedback with dynamic background opacity
  - Reset functionality
  - Smooth animations using react-spring

- **Rich Text Editor**

  - Full-featured text editing capabilities
  - Support for text formatting (bold, italic, underline)
  - Header styling options
  - Ordered and unordered lists
  - Persistent content storage using localStorage

- **User Data Management**

  - Form for collecting user information
  - Data persistence using localStorage
  - Form validation
  - Unsaved changes detection
  - Unique ID generation for each entry

- **Analytics Chart**
  - Line chart visualization for user engagement
  - Interactive data points
  - Responsive design
  - Customizable axes and labels

### UI/UX Features

- Responsive design for all screen sizes
- Smooth animations and transitions
- Modern gradient backgrounds
- Glassmorphism effects
- Loading states with animated indicators
- Intuitive navigation

## 🛠️ Tech Stack

### Core Technologies

- React 18
- TypeScript
- React Router v6

### UI Framework & Styling

- Material-UI (MUI) v5
- Tailwind CSS
- react-spring (for animations)

### State Management & Context

- React Context API
- Local Storage for data persistence

### Form & Data Handling

- React Hook Form
- UUID for unique identifiers

### Rich Text Editing

- React Quill

### Data Visualization

- Chart.js
- react-chartjs-2

### Development Tools

- Vite (Build tool)
- ESLint
- Prettier

## 🚦 Getting Started

1. Clone the repository

```bash
git clone <https://github.com/nitinablespace/react-project.git>
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── appContext/
│   └── AuthContext.tsx
├── components/
│   ├── Counter.tsx
│   ├── PrivateRoute.tsx
│   ├── RichTextEditor.tsx
│   └── UserForm.tsx
├── pages/
│   ├── Dashboard.tsx
│   ├── SignIn.tsx
│   └── SignUp.tsx
└── ...
```

## 🔐 Authentication

The application uses a context-based authentication system with the following features:

- JWT token management
- Protected routes
- Persistent sessions
- Sign-in/Sign-up flows

## 🎨 UI Components

All UI components are built using Material-UI with custom styling and animations:

- Custom gradient buttons
- Animated loading states
- Responsive cards with glassmorphism effects
- Interactive forms with validation

## 📈 Future Enhancements

- Add dark mode support
- Implement real-time data updates
- Add more chart types and visualizations
- Enhance mobile responsiveness
- Add unit and integration tests
- Implement error boundary
- Add more authentication providers

## 📝 License

MIT License

---

Built with ❤️ using React and Modern Web Technologies
