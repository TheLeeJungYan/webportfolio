from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
p=Path('.impeccable/design-lab-v2')
names=['Personal OS','Horizontal Film Reel','Typographic Index','Spatial Project Map','Split-Screen Practice','Modular Bento','Engineering Newspaper','Project File Archive','Presentation Portfolio','Exhibition Wall']
w,h=480,319
out=Image.new('RGB',(w*2+48,(h+40)*5+24),'#e8e8e8')
d=ImageDraw.Draw(out)
f=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',16)
for i,name in enumerate(names):
 im=Image.open(p/f'desktop-{i+1}.jpg').convert('RGB');im.thumbnail((w,h))
 x=16+(i%2)*(w+16);y=16+(i//2)*(h+40)
 d.text((x,y),f'{i+1:02d} / {name}',font=f,fill='#252525')
 out.paste(im,(x,y+28))
out.save(p/'comparison.jpg',quality=90)
