## Contributing to BeWell: Wellness Collective

First off, thank you for considering contributing to BeWell: Wellness Collective! It's people like you that make it a great tool for everyone. Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## Getting Started

Before you begin:
- Make sure you have a [GitHub account](https://github.com/signup/free).
- Ensure you've read the [ReadMe](ReadMe.md).
- Check out the [issues page](https://github.com/albuhrrito/bewell/issues) for already reported issues or feature requests.

## Reporting Issues

If you find a bug in the source code or a mistake in the documentation, you can help by submitting an issue to our [GitHub Repository](https://github.com/albuhrrito/BeWell). Even better, you can submit a Pull Request with a fix.

**Before you submit an issue:**
- Check the documentation and GitHub issues to make sure the issue hasn't already been reported.
- Clearly describe the issue including steps to reproduce if necessary.

## Pull Requests

Good pull requests - patches, improvements, new features - are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

**Please ask first** before embarking on any significant pull request (e.g., implementing features, refactoring code), otherwise, you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

**Pull requests should always be made against the 'main' branch.**

Follow this process if you'd like your work considered for inclusion in the project:

1. Fork the project, clone your fork, and configure the remotes:
   ```bash
   git clone https://github.com/albuhrrito/bewell.git
   cd bewell
   git remote add upstream https://github.com/<YOUR-USERNAME>/bewell.git
   ```

2. If you cloned a while ago, get the latest changes from upstream:
   ```bash
   git checkout main
   git pull upstream main
   ```

3. Create a new topic branch (off the main project development branch) to contain your feature, change, or fix:
   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Use Git's [interactive rebase](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) feature to tidy up your commits before making them public.

5. Locally merge (or rebase) the upstream development branch into your topic branch:
   ```bash
   git pull [--rebase] upstream main
   ```

6. Push your topic branch up to your fork:
   ```bash
   git push origin <topic-branch-name>
   ```

7. Open a Pull Request with a clear title and description.

## Conduct

We have adopted a Code of Conduct that we expect project participants to adhere to. Please read the [full text](Code%20of%20Conduct.md) so that you can understand what actions will and will not be tolerated.

## Community

Keep an eye on the project's issues and pull requests. Engaging in discussions and providing feedback can be a great way of learning and contributing to the project.

---

Thank you for reading this guide, and happy contributing!

-Albert