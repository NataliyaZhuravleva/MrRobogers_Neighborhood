# <span style="color:#0ec2b8">_Mr. Roboger's Neighborhood_</span>

#### _Mr. Roboger's Neighborhood app, 10/30/2020_

#### By _**Nataliya Zhuravleva**_

## <span style="color:#0ec2b8">Description</span>

_Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:_

* _Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_
* _Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_
* _Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"_

_These exceptions are written from least to most important._
_A user can enter a new number and see new results over and over again._


## <span style="color:#0ec2b8">Setup/Installation Requirements</span>
### <span style="color:#c4f4ef">View Online</span>
_Visit [Mr. Roboger's Neighborhood webpage](https://nataliyazhuravleva.github.io/MrRobogers_Neighborhood/) at https://nataliyazhuravleva.github.io/MrRobogers_Neighborhood/_ to view application on GitHub pages._

### <span style="color:#c4f4ef">Open Locally</span>
1. _Navigate to my [Mr. Roboger's Neighborhood repo](https://github.com/NataliyaZhuravleva/MrRobogers_Neighborhood) at https://github.com/NataliyaZhuravleva/MrRobogers_Neighborhood_ to view the project files and commits.
2. _Click on the green button labeled "Code"_ to copy repository URL.
3. _Clone the repository to your local machine_ by opening your machine terminal and using the command "git clone ".
4. _Click on index.html file_ to view application.


## <span style="color:#0ec2b8">Known Bugs</span>

_No known bags_

## <span style="color:#0ec2b8">Support and contact details</span>

_If you have any questions, ideas or concerns, please, contact me at [natalindria@gmail.com](mailto:natalindria@gmail.com)_


## <span style="color:#0ec2b8">Technologies Used</span>

* _VisualStudio Code_
* _Git_
* _GitHub_
* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_
* _Bootstrap_

## <span style="color:#0ec2b8">Specs</span>

Describe: beepBoop():

1. Test: "It returns false if user inputted negative number or nothing"<br>
    Expect: (beepBoop()).toEqual(false);

2. Test: "It returns array with a range of numbers from 0 the user inputed number:"<br>
    Expect: (beepBoop(5)).toEqual([0,1,2,3,4,5]);

3. Test: "It transforms all array elements into strings"<br>
    Expect: (beepBoop(2)).toEqual(["0","1","2"]);

4. Test: "It changes array element containing single "3" to "Won't you be my neighbor?"<br>
    Expect: (beepBoop(3)).toEqual(["0","1","2","Won't you be my neighbor?"]);

5. Test: "It changes array element containing single "2" to "Boop"<br>
    Expect: (beepBoop(3)).toEqual(["0","1","Boop!","Won't you be my neighbor?"]);   

6. Test: "It changes array element containing single "1" to "Beep"<br>
    Expect: (beepBoop(3)).toEqual(["0","Beep!","Boop!","Won't you be my neighbor?"]);   

7. Test: "It changes array element containing non-single "3" to "Won't you be my neighbor?"<br>
    Expect: (beepBoop(13)).toEqual(["0","Beep!","Boop!","Won't you be my neighbor?","4","5","6","7","8","9","10","11","12","Won't you be my neighbor?"]);   


### <span style="color:#0ec2b8">License</span>

*This software is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license*

Copyright (c) 2020 **_Nataliya Zhuravleva_**
