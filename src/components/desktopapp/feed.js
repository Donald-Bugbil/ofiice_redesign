import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { Label } from 'semantic-ui-react';

const Feeds = () => (
  <Feed>
    <Label as='a' image>
      <img src='/images/avatar/small/joe.jpg' />
      Esthy Asante
    </Label>
     <br/>
     <br/>
      <Input placeholder="What's on your mind?" />
    <Feed.Event>
    <Feed.Label>
        <img src='/images/avatar/small/elliot.jpg' />
    </Feed.Label>
    <Feed.Content>
    <Feed.Summary
          date='2 Days Ago'
          user='Esthy Asante'
    />
        
    <Feed.Extra text>
         Hello Everyone. Today is a new day, get motivated and work with positivity. 
         Happy Working Day Everyone!!!
    </Feed.Extra>
      <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='/images/avatar/small/helen.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Kukua</a> added <a>2 new illustrations</a>
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
         <Feed.Extra text>
         Hello Everyone. Today is a new day, get motivated and work with positivity. 
         Happy Working Day Everyone!!!
        </Feed.Extra>
        {/* <Feed.Extra images>
          <a>
            <img src='/images/wireframe/image.png' />
          </a>
          <a>
            <img src='/images/wireframe/image.png' />
          </a>
        </Feed.Extra> */}
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />1 Like
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

     <Feed.Event>
      <Feed.Label image='/images/avatar/small/jenny.jpg' />
      <Feed.Content>
        <Feed.Summary
          date='2 Days Ago'
          user='Dorcas'
        //   content='add you as a friend'
        />
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />8 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='/images/avatar/small/joe.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Wisdom</a> posted on his page
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
         Hello Everyone. Today is a new day, get motivated and work with positivity. 
         Happy Working Day Everyone!!!
        </Feed.Extra>
        <Feed.Meta>
              <Feed.Like>
            <Icon name='like' />5 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='/images/avatar/small/justen.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Gideon</a> added <a>2 new photos</a> of you
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
         <Feed.Extra text>
         Hello Everyone. Today is a new day, get motivated and work with positivity. 
         Happy Working Day Everyone!!!
        </Feed.Extra>
        {/* <Feed.Extra images>
          <a>
            <img src='/images/wireframe/image.png' />
          </a>
          <a>
            <img src='/images/wireframe/image.png' />
          </a>
        </Feed.Extra> */}
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            41 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default Feeds;
