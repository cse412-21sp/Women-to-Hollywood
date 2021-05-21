library(dplyr)
library(plotly)
library(ggplot2)

data <- read.csv("nextBechdel_crewGender.csv", stringsAsFactors = FALSE)

gender_counts <- data %>% group_by(MOVIE) %>% count(GENDER_GUESS)

write.csv(gender_counts, "gender_counts.csv", row.names = FALSE)


all_tests <- read.csv("nextBechdel_allTests.csv", stringsAsFactors = FALSE)
proportions <- read.csv("proportion_data.csv", stringsAsFactors = FALSE)

test <- right_join(proportions,all_tests , by = "movie")

static_plot <-  ggplot(data = test, 
                mapping = aes(label = movie, x = Female.Male.Ratio, 
                              y = rottentomatoes_critics, size = imdb, color = boxoffice..box.office.mojo..domestic.opening.)
    ) + 
  geom_point(
    alpha = .5) +
  scale_colour_gradient2(
    low = "darkred",
    mid = "yellow",
    high = "darkgreen"
  ) +
  ggtitle("Critics Rotten Tomatoes Score vs. Female:Male Ratio in Crew") +
  xlab("Female:Male Ratio in Crew") +
  ylab("Critics Rotten Tomatoes Score") +
  labs(color = "Box Office Domestic Opening (USD)")

#convert to interactive plot
interactive_plot <- ggplotly(static_plot)

interactive_plot