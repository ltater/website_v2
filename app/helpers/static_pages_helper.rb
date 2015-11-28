module StaticPagesHelper

	# Returns default text if About This Page is blank
	def about_page(page_description = '')
		base_description = "This page was created dynamically via a database."
		if page_description.empty?
			base_description
		else 
			"#{page_description}"
		end
	end
end