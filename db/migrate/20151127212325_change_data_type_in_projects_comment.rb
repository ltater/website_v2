class ChangeDataTypeInProjectsComment < ActiveRecord::Migration
  def change
  	change_column :projects, :comment, :text
  	change_column :projects, :technology, :text
  end
end
