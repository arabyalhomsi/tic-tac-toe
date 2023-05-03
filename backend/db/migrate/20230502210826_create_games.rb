class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :playerx
      t.string :playero
      t.string :winner

      t.timestamps
    end
  end
end
