# jasanoff-lab

This github repository contains the Jasanoff Lab website.

## Editing content

Site content is in the `_data/` directory. In this directory, there is one `json` file per page of the site. For more information about the `json` format, see [this resource](https://www.digitalocean.com/community/tutorials/an-introduction-to-json) or search for more examples online.

Find the `json` file corresponding to the page you want to edit. For example, `about.json`. Edit this file to edit the text that will appear on the website.

1. In the file explorer above, click on `_data`
2. Click on the `json` file
3. Click the pencil in the top right of the file preview to edit.
4. When finished editing, scroll to the bottom and click "commit changes"

### Putting links in content

To put a link in content, you can put an HTML `<a>` tag into your text. For example:
```
<a href=\"www.example.com\">link text</a>
```

Please note the `\"` backslash before the quotes surrounding the url. This is slightly different from normal HTML, but is necessary in `json` files.

### Adding images

Upload images to the corresponding folder inside the `/assets/images` directory. There are folders for each of the `papers`, `people`, and `news` pages already set up. Then, edit the `json` file for the page to add the url to the image. Urls must start with `/assets/images`.

## Making backups

Github will automatically keep a history of changes to each file. To view previous versions of a file, go to that file and click "History" in the top right of the file preview.

To make a manual backup, click the green "Clone or download" button at the top right of the file explorer above. Then click "Download ZIP" to download a zip file containing all of the website files including content.
