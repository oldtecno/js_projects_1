// const list = {
//     H:{
//         e:1,
//         Z:1,
//         A:1
//     },
//     He:{
//         e:2,
//         Z:2,
//         A:4
//     },
//     Li:{
//         e:3,
//         Z:3,
//         A:7
//     },
//     Be:{
//         e:4,
//         Z:4,
//         A:9
//     },
//     B:{
//         e:5,
//         Z:5,
//         A:11
//     },
//     C:{
//         e:6,
//         Z:6,
//         A:12
//     },
//     N:{
//         e:7,
//         Z:7,
//         A:14
//     },
//     O:{
//         e:8,
//         Z:8,
//         A:16
//     },
//     F:{
//         e:9,
//         Z:9,
//         A:19
//     },
//     Ne:{
//         e:10,
//         Z:10,
//         A:20
//     },
//     Na:{
//         e:11,
//         Z:11,
//         A:23
//     },
//     Mg:{
//         e:12,
//         Z:12,
//         A:24
//     },
//     Al:{
//         e:13,
//         Z:13,
//         A:27
//     },
//     Si:{
//         e:14,
//         Z:14,
//         A:28
//     },
//     P:{
//         e:15,
//         Z:15,
//         A:31
//     },
//     S:{
//         e:16,
//         Z:16,
//         A:32
//     },
//     Cl:{
//         e:17,
//         Z:17,
//         A:35.5
//     },
//     Ar:{
//         e:18,
//         Z:18,
//         A:40
//     },
//     K:{
//         e:19,
//         Z:19,
//         A:39
//     },
//     Ca:{
//         e:20,
//         Z:20,
//         A:40
//     },
//     Sc:{
//         e:21,
//         Z:21,
//         A:45
//     },
//     Ti:{
//         e:22,
//         Z:22,
//         A:48
//     },
//     V:{
//         e:23,
//         Z:23,
//         A:51
//     },
//     Cr:{
//         e:24,
//         Z:24,
//         A:52
//     },
//     Mn:{
//         e:25,
//         Z:25,
//         A:55
//     },
//     Fe:{
//         e:26,
//         Z:26,
//         A:56
//     },
//     Co:{
//         e:27,
//         Z:27,
//         A:58
//     },
//     Ni:{
//         e:28,
//         Z:28,
//         A:59
//     },
//     Cu:{
//         e:29,
//         Z:29,
//         A:63.5
//     },
//     Zn:{
//         e:30,
//         Z:30,
//         A:65
//     }
// };




// most Importent

























document.getElementById("btn1").addEventListener('click', function () {

    const  sName = document.getElementById('your_name').value;
    const sGpa = document.getElementById('your_gpa').value;
    const numberGpa = parseFloat(sGpa);
    console.log( typeof numberGpa, numberGpa);
    const sMarks = document.getElementById('your_marks').value;
    const numberMarks = parseInt(sMarks);
    
    
    if (typeof sName === 'string' && typeof numberGpa === 'number' && !isNaN(numberGpa) && typeof numberMarks === 'number' && !isNaN(numberMarks)) {
        
        
    document.getElementById('your_name').value=''
    document.getElementById('your_gpa').value=''
    document.getElementById('your_marks').value=''



    const container = document.getElementById('container');
    const li = document.createElement('li');
    li.classList.add('p-3', 'bg-white', 'flex', 'text-center', 'lg:text-lg', 'lg:font-medium', 'mt-1');


    const h1_1 =document.createElement('h1');
    h1_1.classList.add("overflow-auto", 'w-[33.33%]')
    h1_1.innerText= sName;
    li.appendChild(h1_1);
    

    const h1_2 =document.createElement('h1');
    h1_2.classList.add('w-[33.33%]')
    h1_2.innerText= sGpa;
    container.appendChild(li);
    li.appendChild(h1_2);
    
    const h1_3 =document.createElement('h1');
    h1_3.classList.add('w-[33.33%]')
    h1_3.innerText= sMarks;
    container.appendChild(li);
    li.appendChild(h1_3);


    container.appendChild(li);

    }
    else{
        alert("Opps!! ")
    }
});