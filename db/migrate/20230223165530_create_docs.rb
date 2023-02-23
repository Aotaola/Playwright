class CreateDocs < ActiveRecord::Migration[7.0]
  def change
    create_table :docs do |t|
      t.string :title
      t.string :Author
      t.integer :wordcount
      t.string :info
      t.string :text
      t.string :image_url

      t.timestamps
    end
  end
end
