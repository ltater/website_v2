class StaticPagesController < ApplicationController
  def home
  	@featured_projects = Project.show_projects 1
  end

  def projects
  end

  def about
  end

  def contact
  end
end
