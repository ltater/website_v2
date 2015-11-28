class UpdateTechnologyTable < ActiveRecord::Migration
  def change
  	add_column :technologies, :name, :string
  	add_column :technologies, :experience, :integer
  end
end