# To-Do List Application 📝

A simple, elegant to-do list web application built with vanilla HTML, CSS, and JavaScript. Keep track of your tasks with a clean, user-friendly interface that persists your data locally.

## Features ✨

- **Add Tasks**: Quickly add new tasks with the input field
- **Mark Complete**: Click on tasks to mark them as completed with a strikethrough effect
- **Delete Tasks**: Remove tasks with a smooth fade-out animation
- **Keyboard Support**: Press Enter to add tasks without clicking the button
- **Data Persistence**: Your tasks are automatically saved to local storage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Visual Feedback**: Hover effects and smooth transitions for better user experience

## Technologies Used 🛠️

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6)**: Interactive functionality and local storage management
- **Google Fonts**: Poppins font family for clean typography

## File Structure 📁

```
todo-app/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
├── checked.svg         # Checkmark icon (referenced in CSS)
├── uncheck.svg         # Empty circle icon (referenced in CSS)
└── README.md           # This file
```

## Getting Started 🚀

1. **Clone or Download**: Get all the project files
2. **Open**: Simply open `index.html` in your web browser
3. **Start Using**: Begin adding your tasks immediately!

No installation or build process required - it's a pure client-side application.

## How to Use 📖

1. **Adding Tasks**: 
   - Type your task in the input field
   - Click the "Add" button or press Enter
   - Your task will appear in the list below

2. **Completing Tasks**:
   - Click on any task to mark it as completed
   - Completed tasks will show a strikethrough and changed color
   - Click again to unmark if needed

3. **Deleting Tasks**:
   - Click the "×" symbol on the right side of any task
   - The task will fade out smoothly before being removed

4. **Data Persistence**:
   - Your tasks are automatically saved as you make changes
   - When you reload the page, your tasks will still be there

## Customization 🎨

### Colors
The app uses a purple gradient background. You can modify the colors in `styles.css`:
- Background gradient: Line with `background: linear-gradient(135deg, #153677, #4e085f);`
- Button color: `.row button` background-color property
- Text colors: Various color properties throughout the CSS

### Styling
- Font family can be changed by modifying the Poppins import and font-family declarations
- Border radius, shadows, and spacing can be adjusted in the CSS file
- Animation timing can be modified in the JavaScript fade-out effect

## Browser Compatibility 🌐

This application works in all modern browsers including:
- Chrome (recommended)
- Firefox
- Safari
- Edge

**Note**: Requires JavaScript to be enabled for full functionality.

## Contributing 🤝

Feel free to fork this project and submit pull requests for any improvements. Some areas that could use enhancement:
- Better error handling
- Input validation
- Accessibility improvements
- Code organization and comments

## License 📄

This project is open source and available under the MIT License.

---

**Enjoy staying organized with your new to-do list! 🎉**
