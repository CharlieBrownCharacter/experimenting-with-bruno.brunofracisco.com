<script setup lang="ts">
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  type SidebarProps,
} from '@/components/ui/sidebar'

import { ChevronRight, Text, Diamond, FlaskConical, TriangleRight } from 'lucide-vue-next'

import { Sidebar, SidebarContent, SidebarRail } from '@/components/ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
})
</script>

<template>
  <Sidebar v-bind="props" collapsible="offcanvas">
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenuItem>
            <SidebarMenuSubButton as-child>
              <RouterLink to="/">
                <FlaskConical />
                <span>Experimenting with Bruno</span>
              </RouterLink>
            </SidebarMenuSubButton>
          </SidebarMenuItem>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarMenu>
          <Collapsible as-child default-open class="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger as-child>
                <SidebarMenuButton tooltip="Text animations">
                  <Text />
                  <span>Text</span>
                  <ChevronRight
                    class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                  />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton as-child>
                      <RouterLink :to="{ name: 'textAnimations/WavyText' }">
                        <span>Wavy text</span>
                      </RouterLink>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton as-child>
                      <RouterLink :to="{ name: 'textAnimations/FollowCursorText' }">
                        <span>Follow cursor</span>
                      </RouterLink>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarMenu>
          <Collapsible as-child default-open class="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger as-child>
                <SidebarMenuButton tooltip="Text animations">
                  <Diamond />
                  <span>Cards</span>
                  <ChevronRight
                    class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                  />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton as-child>
                      <RouterLink :to="{ name: 'cards/AnimateCardBorder' }">
                        <span>Animated Border</span>
                      </RouterLink>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarMenu>
          <Collapsible as-child default-open class="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger as-child>
                <SidebarMenuButton tooltip="Text animations">
                  <TriangleRight />
                  <span>Shapes</span>
                  <ChevronRight
                    class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                  />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton as-child>
                      <RouterLink :to="{ name: 'shapes/FollowCursorShape' }">
                        <span>Follow cursor shape</span>
                      </RouterLink>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>

                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton as-child>
                      <RouterLink :to="{ name: 'shapes/FillHeartOnClick' }">
                        <span>Fill heart on click</span>
                      </RouterLink>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>

                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton as-child>
                      <RouterLink :to="{ name: 'shapes/LaneSwitching' }">
                        <span>Lane switching</span>
                      </RouterLink>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>
