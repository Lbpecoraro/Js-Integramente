

localStorage.setItem('1', 'lucia')
localStorage.setItem('2', 'matias')
localStorage.setItem('3', 'leticia')
localStorage.setItem('4', 'atenea')

for (let i = 1; i <= localStorage.length; i++) {
    console.log (localStorage.getItem (`${i}`))
    
}