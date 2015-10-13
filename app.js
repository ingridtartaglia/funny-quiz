var funnyQuizApp = angular.module("funnyQuizApp", []);

funnyQuizApp.controller("funnyQuizCtrl", function($scope){
    $scope.quizEndedWater = false;
    $scope.quizEndedBeer = false;
    $scope.quizEndedWine = false;
    $scope.quizEndedVodka = false;

    $scope.question1Answers = _.shuffle([
        { title: "Meats, sea fruits or anything with cheese", value: "1" },
        { title: "Junkie foods", value: "2" },
        { title: "Something healthy", value: "3" },
        { title: "Fruits", value: "4" },
    ]);
    $scope.question2Answers = _.shuffle([
        { title: "Portugal", value: "1" },
        { title: "Belgium", value: "2" },
        { title: "France", value: "3" },
        { title: "Russia", value: "4" },
    ]);
    $scope.question3Answers = _.shuffle([
        { title: "Dinner", value: "1" },
        { title: "Night Club", value: "2" },
        { title: "Anywhere", value: "3" },
        { title: "Bar", value: "4" },
    ]);
    $scope.question4Answers = _.shuffle([
        { title: "Boyfriend/Girlfriend", value: "1" },
        { title: "Friends", value: "2" },
        { title: "With myself", value: "3" },
        { title: "Who cares?", value: "4" },
    ]);
    $scope.question5Answers = _.shuffle([
        { title: "Because I just wanna relax.", value: "1" },
        { title: "Because I'm celebrating!", value: "2" },
        { title: "Because yes.", value: "3" },
        { title: "Because it's weekend!", value: "4" },
    ]);


    //
    //
    // if () {
    //     $scope.quizEndedWater = true;
    // }
    // else if (){
    //     $scope.quizEndedBeer = true;
    // }
    // else if (){
    //     $scope.quizEndedWine = true;
    // }
    // else {
    //     $scope.quizEndedVodka = true;
    // }

});
