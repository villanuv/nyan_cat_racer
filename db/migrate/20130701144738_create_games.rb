class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :completed
      t.time :start_at
      t.time :end_at
      t.string :winner
    end
  end
end
