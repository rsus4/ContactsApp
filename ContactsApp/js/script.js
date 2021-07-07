

angular.module("contactList", [])



  .controller("nameAdderController", function($scope) {

    var nameList = [{
      name: "Krish",
      favorite: "",
      lastname: "Gupta",
      email: "krish@google.com"
    }, {
      name: "Dhairya",
      favorite: "",
      lastname: "Chaudhary",
      email: "dhairya@gmail.com"
    }, {
      name: "Mohit",
      favorite: "",
      lastname: "Gupta",
      email: "mohitgupta@gmail.com"
    }, {
      name: "Mohit",
      favorite: "",
      lastname: "Kapoor",
      email: "mohit@adobe.com"
    }, {
      name: "Shivani",
      favorite: "",
      lastname: "Gupta",
      email: "shivani@microsoft.com"
    }, {
      name: "Aditi",
      favorite: "favorite",
      lastname: "Ramsisaria",
      email: "aditti@cmu.com"
    }, {
      name: "Nick",
      favorite: "",
      lastname: "White",
      email: "nickwhite@twitch.com"
    }, {
      name: "Eshaan",
      favorite: "",
      lastname: "Sachdeva",
      email: "eshaan@iiti.in"
    },  {
      name: "Jishnu",
      favorite: "",
      lastname: "Sachdeva",
      email: "Jishnu@iitd.in"
    }, 
    {
      name: "Utkarsh",
      favorite: "",
      lastname: "Singh",
      email: "utk@iitk.com"
    }, ];
    $scope.nameList = nameList;

  
    $scope.editing = false;
  
    $scope.openEdit = function($index) {
       $scope.editing = true;
        $scope.contactName = $scope.nameList[$index].name;
        $scope.nameBox = $scope.nameList[$index].name;
        $scope.emailBox = $scope.nameList[$index].email;
        $scope.lastnameBox = $scope.nameList[$index].lastname;

      $scope.editContact = function(){
          
          console.log($scope.nameList[$index]);
          $scope.nameList.splice($index, 1);
          $scope.addContact();
          $scope.editing = false;
        }
    }

    $scope.nameSorter = function() {
      var byName = $scope.nameList.slice(0)
      byName.sort(function(a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      $scope.nameList = byName;
    }
    
    $scope.nameSorter();
  
    $scope.addContact = function() {
      $scope.emailBox = $scope.emailBox || $scope.nameBox + "@website.com";
      $scope.lastnameBox = $scope.lastnameBox || "123-456-7891";
      
      if($scope.favBox){
        $scope.favBox = "favorite";
      }else{
        $scope.favBox = "";
      }

      $scope.nameList.push({
        name: $scope.nameBox,
        favorite: $scope.favBox,
        lastname: $scope.lastnameBox,
        email: $scope.emailBox
      });

      $scope.nameSorter();

      $scope.emailBox = "";
      $scope.nameBox = "";
      $scope.lastnameBox = "";
    }
var scott;
    $scope.removeName = function($index) {
      var curName = $scope.nameList[$index].name;
      $scope.nameList.splice($index, 1);
      console.log(curName + " removed");
    }

    $scope.favSort = false;

    $scope.favToggle = function() {
      if ($scope.favSort) {
        $scope.favSort = false;
      } else {
        $scope.favSort = true;
      }
      console.log($scope.favSort);
    }

  });
