# Example of building Java docker image with [Jib](https://github.com/GoogleContainerTools/jib) via [Gradle](https://github.com/GoogleContainerTools/jib/tree/master/jib-gradle-plugin)

> :warning: Since jib directly emits a docker image (there is no Dockerfile), this only works with the [prebuilt image](https://gap-docs.gservice.emarsys.net/using-prebuilt-image.html) gap feature.

Base image is configured in the `build.gradle` file using the `jib.from.image` option. For additional configuration, see the [documentation](https://github.com/GoogleContainerTools/jib/tree/master/jib-gradle-plugin#extended-usage)

To build an image and publish it to the local docker daemon:

```sh
$ ./gradlew jibDockerBuild --image=java-gradle-jib:latest
```

To build an image and publish it to a remote docker repository:

```sh
$ ./gradlew jib --image=eu.gcr.io/ems-gap-images/java-gradle-jib:latest
```
