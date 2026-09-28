const onReady = (fn) => fn() // the React tree is already mounted when this runs

export default function todayDate() {

    const today = new Date();
    document.getElementById('day-name').textContent =
      today.toLocaleDateString('en-US', { weekday: 'long' });
    document.getElementById('day-number').textContent = today.getDate();
    document.getElementById('month-name').textContent =
      today.toLocaleDateString('en-US', { month: 'long' });
  
}
