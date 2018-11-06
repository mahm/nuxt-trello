<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout row>
      <v-flex xs4>
        <v-card>
          <v-card-title>
            <div class="headline">New List</div>
          </v-card-title>
          <v-container>
            <v-layout
              column
            >
              <v-flex>
                <v-card>
                  <v-card-text>12</v-card-text>
                </v-card>
              </v-flex>
              <v-flex>
                <v-card>
                  <v-card-text>12</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-text-field label="New task" />
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
