  const robots = 
    [
        {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
        },

        {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
        },

        {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
        },

        {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
        },

        {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
        },

        {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
        },

        {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
        },

        {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
        },

        {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image:'https://robohash.org/9?200x200'
        },

        {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image:'https://robohash.org/10?200x200'
        }
    ];

    //creating a div tag for the robots
    let body = document.getElementsByTagName('body')
    let robot = document.createElement('div');

    //setting a class and appending the robot div to the HTML body
    robot.setAttribute('class', 'robot-class-main');
    body[0].appendChild(robot);

    let mainDivClass = document.getElementsByClassName('robot-class-main');

    //A function to create 10 div for each robot - containing the name, image and email
    function robotGenerator(name, email, image)
    {
        let robotDiv = document.createElement('div');
        robotDiv.setAttribute('class', 'robot-class-individual');
        mainDivClass[0].appendChild(robotDiv);

        let robotImage = document.createElement('img');
        robotImage.setAttribute('src', image);
        robotDiv.appendChild(robotImage);

        let h3 = document.createElement('h3');
        h3.innerHTML = name;
        robotDiv.appendChild(h3);

        let h4 = document.createElement('h4');
        h4.innerHTML = email;
        robotDiv.appendChild(h4);
    }

    //A loop to display all the names, emails and images of the robots
    for(i = 0; i < robots.length; i++)
    {
       robotGenerator(robots[i].name, robots[i].email, robots[i].image);
    }

    //creating an event listener - on input in the search bar
    let searchBar = document.getElementsByClassName("search-bar");
    searchBar[0].addEventListener('input', searchBarInput);

    //An event listener so that on input in the search bar, the robots are being filtered according to the input string
    function searchBarInput(event)
    {
        mainDivClass[0].innerHTML = "";

        //A loop that iterates on each robot to check whether the input string matches with the robot name
        for(let i = 0; i < robots.length; i++)
        {
            if(robots[i].name.includes(event.target.value, 0))
            {
                robotGenerator(robots[i].name, robots[i].email, robots[i].image);
            }
        }
    }






