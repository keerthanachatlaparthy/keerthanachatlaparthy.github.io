function updateCounter() {
    const counter = document.getElementById('counter');
    //increment the counter everytime user visits the page by storing in local storage

    let count = localStorage.getItem('visiterCount');
    if (count == null) {
        count = 1;
    }
    else {
        count = parseInt(count) + 1;
    }
    localStorage.setItem('visiterCount', count);
    counter.innerHTML = `Vistor Count: ${localStorage.getItem('visiterCount')}`;

}
updateCounter();