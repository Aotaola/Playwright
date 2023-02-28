class CreateDocs < ActiveRecord::Migration[6.1]
  def change
    create_table :docs do |t|
      t.string :title
      t.string :author
      t.integer :wordcount
      t.string :info
      t.text :text
      t.string :image_url

      t.timestamps
    end
  end
end
