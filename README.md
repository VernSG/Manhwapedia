
# ManhwaPedia

There is no doubt that most of our childhood was spent watching anime, we have seen and experienced it all. AnimePedia is a thanks-giving repository for the Anime Community ( for all the Otakus out there :) ) where literally anyone can contribute their favourite characters or browse them! A simple application for weebs, made using HTML, CSS, and JavaScript.

Website: [ManhwaPedia](https://manhwapedia.site)

This respository is maintained by: Valkrie

Note: <i>This repository is created with the sole intent of guiding beginners to their initial Open Source contributions.</i>

## What you can Contribute?

There is always something to contribute to a project whether you are a Novice or a Veteran. In this project, you can add your favourite anime character as a card to the website! 
Or maybe you didn't like the line that you are reading right now and want to change it! Well, why not?

We appreciate all kinds of contributions from core-code contributions to non-code contributions like fixing the site, suggesting a feature, raising an issue, etc.


## How to Contribute?

Contributing to ManhwaPedia is a cake-walk as long as you follow the below steps 😉

- Pick the character you want to contribute, and make sure it's not there on the site yet (Use the Search feature)
- `Fork` the repository
- Download your favorite character's image and upload it to the `images` folder. Make sure you provide a valid name for your image file
- Copy the Card template code given below & fill in the information as directed
- Note: Copy & paste the entire code as it is after filling in the details of the character!
<!--Sample [Character Name] card start-->
                <div class="card mb-3 card-bg my-4" style="max-width: 100%;">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                        <!-- Replace image_name_here with the complete name (with extension) of the image you uploaded -->
                            <img src="./images/[image_name_here]" alt="[Character Name here]" height="390px" width="300px">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h2 class="card-title">[Character Name]</h2>
                                <p class="card-text">
                                  [Character Description 1 Here]
                                </p>
                                <p>
                                  [Character Description 2 Here]
                                </p>
                                <hr>
                                <p>Contributed by- [Your name here]</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Sample [Character Name] card end-->
                <!--Add your card below this line -->

- Paste the edited template code into the `index.html` file just below the last added card !
- `Sync` your Fork & then create a `Pull Request`. If there are any conflicts with the main branch then resolve them first.
```
title: Name of the character added
description: Issue no: #[Issue no here] (for adding a new character it's #4)
```
- That's it, you have successfully contributed to ManhwaPedia. Your character will appear on the site within minutes of your PR getting merged 😄
- Star ⭐ the repository if you liked it!

Please refer to the [Contributing Guide](CONTRIBUTING.md) to know more about the guidelines & Code of Conduct.

## License

For more information on licensing, please refer to the [License](LICENSE)

<p align="center">
Do star the Manhwapedia repository ⭐
</p>
