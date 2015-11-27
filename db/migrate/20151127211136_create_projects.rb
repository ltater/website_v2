class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
    	t.string :name
    	t.string :description
    	t.string :image
    	t.string :technology
    	t.string :comment

      t.timestamps null: false
    end
  end
end
