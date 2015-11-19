class RemoveTemplateGravatarFromUsers < ActiveRecord::Migration
  def change
  	remove_column :users, :avatar, :string
  	remove_column :users, :template, :string
  end
end
