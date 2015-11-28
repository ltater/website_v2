class ProjectsController < ApplicationController
	attr_accessor :name, :image, :description, :comment, :technology

	def index
		@projects = Project.all
	end

	def new
		@project = Project.new
	end

	def show
		@project = Project.find(params[:id])
	end

	def create
		@project = Project.new(project_params)

		if @project.save
			redirect_to '/projects'
		end
	end

	def update
		@project = Project.find(params[:id])

		if @project.update(project_params)
			redirect_to @project
		end
	end

	def destroy
		@project = Project.find(params[:id])
		@project.destroy

		redirect_to '/projects'
	end

	private
		def project_params
			params.require(:project).permit(:name, :image, :description, :comment)
		end
end
