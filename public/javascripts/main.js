angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
		
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', function($scope){
        
        $scope.createApplicant = function(){
            $http.post('/applicant', $scope.newApplicant)
            .then(function(returnData){
            $scope.applicants = $scope.applicants || []
            $scope.applicants.push(returnData.data)
            $scope.newApplicant = {}
            
            })
        }
        
        $http.get('/applicants')
            .then(function(returnData){
            console.log('GET " ', returnData)
            $scope.applicants = returnData.data
            
        })
		
	}]);