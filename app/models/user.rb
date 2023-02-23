class User < ApplicationRecord
    has_many :user_docs
    has_many :docs, through: :user_docs

    validates :name, presence: true
    # validates :email, presence: true, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i, message: "must be a valid email address" }
    validates :password_digest, presence: true
    validates :username, presence: true, uniqueness: true
    
end
