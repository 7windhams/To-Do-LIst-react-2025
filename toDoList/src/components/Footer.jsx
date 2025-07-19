import React from 'react';

// Maybe I should move this Footer to its own file later...
function Footer({ totalTasks, completedTasks }) {
  return (
    <footer className="footer">
      <p>
        Tasks completed: {completedTasks} / {totalTasks}
      </p>
      <p>&copy; 2025 My To-Do List App</p>
    </footer>
  );
}

export default Footer;
