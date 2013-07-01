class CreateCatsGames < ActiveRecord::Migration
  def change
    create_table :cats_games do |t|
      t.integer :cat_id
      t.integer :game_id
    end
  end
end
