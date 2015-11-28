class Project < ActiveRecord::Base

	# Display a random selection of projects
	def self.show_projects(number)
		@projects = Project.order("RANDOM()").limit(number)
	end
end