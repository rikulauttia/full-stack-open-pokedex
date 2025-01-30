Application is being worked on by a team of about 6 people. The application is in active development and will be released soon.
Application is coded using Python.

Let's discuss some of the point below.

- Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by Google.
- What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask Google!
- Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

In the Python ecosystem, popular linting tools include Pylint, Flake8 and for example Black. They help to maintain constintent coding styles and catch potential errors early. For testing, Python offers the built-in unittest framework, while many developers can prefer pytest for its simple syntax and powerful features. "Building" in python refers usually to creating distributable packages using tools like Poetry or setuptools.

Beyond Jenkins and and Github Actions there are many other CI solutions aswell. Gitlab CI/CD integrates seamessly with Gitlab's version control, making it a strong choice if you already use Gitlab version control. Travis CI and CircleCI both provide cloud-based platforms with straightforward YAML-based configurations. Another options is Atlassian's Bamboo, which integrates well with other Atlassian's products and can be hosted on-premise or in the cloud.

When deciding in whether to host CI on your own infrastructure or use a cloud-based service's, it depends on multiple factors like budget, security requirements and team expertise. A cloud solution is typically simpler option, since you don't need to maintain servers and handle scalind for example. However, if the organization has strict data residency rules, proprietary hardware depencies, or complicated need for example related to GPU's , a self hosted CI solution might be a better solution.
