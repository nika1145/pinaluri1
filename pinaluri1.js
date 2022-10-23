fetch('https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json')
  .then((response) => response.json())
  .then((json) => {
    const companies = document.getElementById("companies")
    let company = null
    json.forEach(data => {
        const li = document.createElement('li')
    const a = document.createElement('a')
    const text = document.createTextNode(data.name)
    a.appendChild(text)
    li.appendChild(a)
    companies.appendChild(li)
    li.addEventListener('click', () => {
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("email").innerHTML = data.email;
    document.getElementById("frame").value = data.boxes;
    let bay = data.boxes.split(",")
    let sum = 0
    for(let i = 0; i < bay.length;i++){
      sum = sum + Number(bay[i])
      console.log(sum)
    }
    document.getElementById("cargo").innerHTML = Math.ceil(sum/10);
    })
    })
  }).catch(err => console.log('err',err));
