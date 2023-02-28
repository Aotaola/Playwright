class Doc < ApplicationRecord
    has_many :user_docs
    has_many :users, through: :user_docs

    validates :text, presence: true, uniqueness: true
    validates :title, presence: true
    validates :author, presence: true
end 

