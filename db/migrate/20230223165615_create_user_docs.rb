class CreateUserDocs < ActiveRecord::Migration[7.0]
  def change
    create_table :user_docs do |t|
      t.integer :user_id
      t.integer :doc_id

      t.timestamps
    end
  end
end
