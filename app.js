var funnyQuizApp = angular.module("funnyQuizApp", []);

funnyQuizApp.controller("funnyQuizCtrl", function($scope){
    $scope.answers = [undefined,undefined,undefined,undefined,undefined];
    $scope.quizEndedWater = false;
    $scope.quizEndedBeer = false;
    $scope.quizEndedWine = false;
    $scope.quizEndedVodka = false;

    $scope.question1Answers = _.shuffle([
        { title: "Something healthy", type: "water", value: 1 },
        { title: "Barbecue", type: "beer", value: 2 },
        { title: "Pasta", type: "wine", value: 3 },
        { title: "Fruits", type: "vodka", value: 4 },
    ]);
    $scope.question2Answers = _.shuffle([
        { title: "France", type: "water", value: 1 },
        { title: "Belgium", type: "beer", value: 2 },
        { title: "Portugal", type: "wine", value: 3 },
        { title: "Russia", type: "vodka", value: 4 },
    ]);
    $scope.question3Answers = _.shuffle([
        { title: "Anywhere", type: "water", value: 1 },
        { title: "Night Club", type: "beer", value: 2 },
        { title: "Dinner", type: "wine", value: 3 },
        { title: "Bar", type: "vodka", value: 4 },
    ]);
    $scope.question4Answers = _.shuffle([
        { title: "With myself", type: "water", value: 1 },
        { title: "Friends", type: "beer", value: 2 },
        { title: "Boyfriend or girlfriend", type: "wine", value: 3 },
        { title: "Who cares?", type: "vodka", value: 4 },
    ]);
    $scope.question5Answers = _.shuffle([
        { title: "Because yes", type: "water", value: 1 },
        { title: "Because I'm celebrating!", type: "beer", value: 2 },
        { title: "Because I just wanna relax.", type: "wine", value: 3 },
        { title: "Because it's weekend!", type: "vodka", value: 4 },
    ]);

    $scope.seeFinalResult = function(){
        var finalResult = _.chain($scope.answers).countBy().pairs().max(_.last).head().value();
        if (finalResult == 1) {
            $scope.quizEndedWater = true;
        }
        else if (finalResult == 2) {
            $scope.quizEndedBeer = true;
        }
        else if (finalResult == 3) {
            $scope.quizEndedWine = true;
        }
        else if (finalResult == 4) {
            $scope.quizEndedVodka = true;
        }
    }


});
