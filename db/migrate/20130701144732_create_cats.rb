class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.string :initials, :unique => true
    end
  end
end
