class Project < ActiveRecord::Base

	# Display a random selection of projects
	def self.show_projects(number)
		@projects = Project.limit(number).order("RANDOM()")
	end
end