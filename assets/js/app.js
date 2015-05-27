(function(){

	var app = angular.module('app', []);

	app.service('Companies', ['$http', '$log', function($http) {
		var data = [];

		return {
			get: function() {
				if(data.length == 0) {
					$http.get('assets/data.json')
						.success(function(response) {
							for(var i = 0, ii = response.length; i < ii; i++) {
								data.push(response[i]);
							}
						})
						.error(function(error) {
							alert(error);
						});
				}
				return data;
			},
			post: function() {
				
			}
		}
	}]);

	app.controller('companyList', ['$scope', '$filter', 'Companies', function ($scope, $filter, Companies) {

		$scope.companies = Companies.get();

		$scope.selectedCompany = '';

		$scope.filters = {
			search: '',
			services: '',
			focus: '',
			industry: '',
			company_size: ''
		};

		$scope.setServices = function(service) {
			$scope.filters.services = service;
		};

		$scope.setFocus = function(focus) {
			$scope.filters.focus = focus;
		};

		$scope.setIndustry = function(industry) {
			$scope.filters.industry = industry;
		};

		$scope.setCompanySize = function(company_size) {
			$scope.filters.company_size = company_size;
		};

		$scope.clearFilters = function() {
			$scope.filters = {
				search: '',
				services: '',
				focus: '',
				industry: '',
				company_size: ''
			};
		};

		$scope.showDetails = function(element) {
			$scope.selectedCompany = element;
		};

	}]);

})();