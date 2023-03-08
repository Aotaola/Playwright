class UsersWithDocsSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :password_digest, :bio, :avatar
  has_many :docs
end
