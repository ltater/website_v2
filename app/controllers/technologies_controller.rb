class TechnologiesController < ApplicationController
	attr_accessor :name, :experience

	def index
		@technologies = Technology.all
	end

	def new
		@technology = Technology.new
	end

	def create
		@technology = Technology.new(technology_params)

		if @technology.save
			redirect_to '/technologies'
		end
	end

	def update
		@technology = Technology.find(params[:id])

		if @technology.update(technology_params)
			redirect_to @technology
		end
	end

	def destroy
		@technology = Technology.find(params[:id])
		@technology.destroy

		redirect_to '/technologies'
	end

	private
		def technology_params
			params.require(:technology).permit(:name, :experience)
		end

end
