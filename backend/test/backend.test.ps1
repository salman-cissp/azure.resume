
# Define the Describe block for the test case
Describe "Website Availability" {
    # Define the Context block for the test case
    Context "When checking the availability of $websiteUrl" {
        # Define the It block for the test case
        It "Should be online" {
            # Test the connection to the website
            $testResult = Test-NetConnection -ComputerName www.salman-cv.uk -InformationLevel Quiet

            # Check if the website is online
            $testResult | Should -Be $true
        }
    }
}