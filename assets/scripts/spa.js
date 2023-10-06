// Function to show a specific view by ID
document.addEventListener('DOMContentLoaded', function () {
    const views = document.querySelectorAll('.view');
    const viewShow = (id) => {
        views.forEach(view => view.style.display = 'none');
        document.getElementById(id).style.display = 'block';
    };
    // Event listeners for view links
    document.getElementById('viewlink1').addEventListener('click', function () {
        viewShow('view1');
    });
    document.getElementById('viewlink2').addEventListener('click', function () {
        viewShow('view2');
    });
    document.getElementById('viewlink3').addEventListener('click', function () {
        viewShow('view3');
     });
    document.getElementById('viewlink4').addEventListener('click', function () {
        viewShow('view4');
     });    
    // Show the initial view
    viewShow('view1');
});